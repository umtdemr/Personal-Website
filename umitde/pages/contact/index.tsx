import type { NextPage } from "next";
import React, { ChangeEvent, useRef, useState, useEffect, FormEvent } from 'react'

import { ValidType, ValidInputs, MailData } from "./contact.types";


const Contact: NextPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
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


    const nameEl = useRef<HTMLInputElement>(null);
    const emailEl = useRef<HTMLInputElement>(null);
    const messageEl = useRef<HTMLTextAreaElement>(null);
    
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
    }, []);

    useEffect(() => {
      setIsValid(isValidAll.every(item => item.isValid));
    }, [isValidAll]);

    const sendMessage = (e: FormEvent) => {
      e.preventDefault();
      console.log("mesaj gönder");
      let data: MailData = {
        name,
        message,
        email,
      }
      fetch('/api/contact/', {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          console.log(res);
        });

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
                    >Gönder</button>
                </form>
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