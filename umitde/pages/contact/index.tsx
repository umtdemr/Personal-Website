import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useRef, useState, useEffect, FormEvent, createRef} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import { ValidType, ValidInputs, MailData, CaptchaVerify } from "../../types/contact.types";
import send_email from "../../utils/contact/send_email";

import tr from "../../locales/contact/tr"
import en from "../../locales/contact/en"



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

    const router = useRouter();
    const { locale } = router;

    const t = locale === "tr" ? tr : en;


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
      recaptchaRef.current!.reset();
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
              <h1>{t.title}</h1>
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
                      <label htmlFor="name">{t.form.name.title}</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder={t.form.name.placeholder}
                        value={name} 
                        onChange={(e) => handleName(e)}
                        ref={nameEl}
                        required />
                    </div>
                    <div className="form_group">
                      <label htmlFor="email">{t.form.email.title}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder={t.form.email.placeholder}
                        onChange={(e) => handleMail(e)}
                        ref={emailEl}
                        required />
                    </div>
                    <div className="form_group">
                      <label htmlFor="message">{t.form.message.title}</label>
                      <textarea 
                        name="message"
                        id="message"
                        placeholder={t.form.message.placeholder}
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
                      {t.form.button.title}</button>
                </form>
                <div className="form_message">
                  <div className="success">
                    <Image src="/images/success.png" width={150} height={150} alt="Mesaj başarıyla gönderildi"/>
                    <span className='message'>{t.form.message.success}</span>
                  </div>
                  <div className="error">
                    <Image src="/images/error.png" width={150} height={150} alt="Mesaj gönderilirken bir hata oluştu"/>
                    <span className='message'>
                      {<span dangerouslySetInnerHTML={{__html: t.form.message.error.motivate}}></span>}
                      <br />
                      {t.form.message.error.message} {errMsg}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondary_column">
              <div className="why-me">
                <h2 className="why-me--title">{t.motivate.title}</h2>
                <ul className="why-me--list">
                  <li>{t.motivate.first}</li>
                  <li>{t.motivate.second}</li>
                  <li>{t.motivate.last}</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="contact_bottom">
            <div className="container">
              <p dangerouslySetInnerHTML={{__html: t.motivate.bottom}}></p>
            </div>
          </section>
        </div>
        </>
    )
}


export default Contact;