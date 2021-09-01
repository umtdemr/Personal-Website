import type { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState, useEffect, FormEvent, createRef} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import { ValidType, ValidInputs, MailData, CaptchaVerify } from "../../types/contact.types";
import send_email from "../../utils/contact/send_email";


const Contact: NextPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [message, setMessage] = useState('');
    const [isValidAll, setIsValidAll] = useState<[
      ValidType,
      ValidType,
      ValidType
    ]>([
      {isValid: false, isTyped: false},
      {isValid: false, isTyped: false},
      {isValid: false, isTyped: false},
    ]);
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const recaptchaRef = createRef<ReCAPTCHA>();


    const nameEl = useRef<HTMLInputElement>(null);
    const emailEl = useRef<HTMLInputElement>(null);
    const messageEl = useRef<HTMLTextAreaElement>(null);
    const sendBtnEl = useRef<HTMLButtonElement>(null);
    
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;
      val = val.trimLeft();
      const re = /^([a-zA-Z\sğüşöçıİĞÜŞÖÇ]{2,})$/g
      handleChange(val, setName, re, nameEl.current!, ValidInputs.NAME);
    }

    const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;
      val = val.trimLeft();
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      handleChange(val, setEmail, re, emailEl.current!, ValidInputs.EMAIL);
    }

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let val = e.target.value;
      val = val.trimLeft();
      const re = /^([a-zA-Z\*\.,\+\sğüşöçıİĞÜŞÖÇ\?\()-@_:]{10,})$/
      handleChange(val, setMessage, re, messageEl.current!, ValidInputs.MESSAGE);

    }

    const handleChange = (
        value: string,        
        setVal: any,
        re: RegExp,
        inputOrTextarea: HTMLInputElement | HTMLTextAreaElement,
        type: ValidInputs
      ) => {
        setVal(value);
        let oldValid = [...isValidAll] as [ValidType, ValidType, ValidType];
        if (re.test(value)) {
          inputOrTextarea.classList.remove("invalid");
          oldValid[type].isValid = true;
        } else {
          inputOrTextarea.classList.add("invalid");
          oldValid[type].isValid = false;
        }
        oldValid[type].isTyped = true;
        setIsValidAll(oldValid);
    }

    useEffect(() => {
      const listOfEls: (HTMLInputElement | HTMLTextAreaElement)[] = [
        nameEl.current!,
        emailEl.current!,
        messageEl.current!
      ]
      listOfEls.forEach(elItem => {
        const parent = elItem.parentElement!;
        elItem.addEventListener('focus', () => {
          parent.classList.add("has-focus");
        });
        elItem.addEventListener('blur', () => {
          parent.classList.remove("has-focus");
        });
      })
      
      return () => {
        listOfEls.forEach(elItem => {
          const parent = elItem.parentElement!;
          elItem.removeEventListener('focus', () => {
            parent.classList.add("has-focus");
          });
          elItem.removeEventListener('blur', () => {
            parent.classList.remove("has-focus");
          });
        });
      }
    }, []);

    useEffect(() => {
      setIsValid(isValidAll.every(item => item.isValid));
    }, [isValidAll]);


    const sendMessage = async (e: FormEvent) => {
      e.preventDefault();
      if (isLoading || !isValidAll)
      return;
      setIsLoading(true);
      recaptchaRef.current!.execute();

    }
      
    const onReCAPTCHAChange = async (captchaCode: string | undefined | null) => {
      if(!captchaCode) {
        setIsLoading(false);
        return;
      }
      const captcha_data: CaptchaVerify = {
        "response": captchaCode
      }

      let mail_data: MailData = {
        name,
        message,
        email,
      }
        
      await send_email(
        setIsLoading,
        setErrMsg,
        mail_data,
        captcha_data
      );
    }

    return (
        <>
        <div className="gradient_bg"></div>
        <div className="contact_page">
          <div className="contact_header">
            <div className="skewed_container">
              <div className="gradient"></div>
            </div>
            <div className="headline">
              <h1>Contact With Me</h1>
            </div>
          </div>
          <section className="contact_form_section">
            <div className="form_column">
              <div className="form_container">
                <form action="" method="post" onSubmit={(e) => sendMessage(e)}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.CAPCTCHA_SITE_KEY!}
                    onChange={onReCAPTCHAChange}
                  />

                  <fieldset>
                    <div className="form_group">
                      <label htmlFor="name">Ad</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Jane"
                        value={name} 
                        onChange={(e) => handleName(e)}
                        ref={nameEl}
                        required />
                    </div>
                    <div className="form_group">
                      <label htmlFor="email">E-Posta</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="jane.doe@gmail.com"
                        onChange={(e) => handleMail(e)}
                        ref={emailEl}
                        required />
                    </div>
                    <div className="form_group">
                      <label htmlFor="message">Mesaj</label>
                      <textarea 
                        name="message"
                        id="message"
                        placeholder="Selam Ümit, ... hakkında yazıyorum..." 
                        onChange={(e) => handleMessage(e)}
                        ref={messageEl}
                        required></textarea>
                    </div>
                  </fieldset>
                  <button 
                    className="contact_send"
                    disabled={!isValid && true}
                    ref={sendBtnEl}
                    >
                      { isLoading && 
                        <>
                       <i className="fa fa-circle-notch fa-spin"></i> &nbsp; </> }
                      Gönder</button>
                </form>
                <div className="form_message">
                  <div className="success">
                    <Image src="/images/success.png" width={150} height={150} alt="Mesaj başarıyla gönderildi"/>
                    <span className='message'>Mesajın alındı. En yakın sürede görüşmek gözere</span>
                  </div>
                  <div className="error">
                    <Image src="/images/error.png" width={150} height={150} alt="Mesaj gönderilirken bir hata oluştu"/>
                    <span className='message'>
                      Mesajın gönderilirken hata meydana geldi.
                      Lütfen daha sonra tekrar dene ya da <a href="mailto:umitde296@gmail.com">umitde296@gmail.com</a> adresinden bana mail atmayı dene.
                      <br />
                      Hata mesajı: {errMsg}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondary_column">
              <div className="why-me">
                <h2 className="why-me--title">İletişime Geç</h2>
                <ul className="why-me--list">
                  <li>Sadece bir merhaba demek için</li>
                  <li>Freelance destek için</li>
                  <li>herhangi bir şey için</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="contact_bottom">
            <div className="container">
              <p>Form doldurmak istemiyorsan <a href="mailto:umitde296@gmail.com">umitde296@gmail.com</a> adresinden bana ulaşabilirsin.</p>
            </div>
          </section>
        </div>
        </>
    )
}


export default Contact;