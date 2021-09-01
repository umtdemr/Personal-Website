import { MailData, CaptchaVerify } from "../../types/contact.types";


export default async function send_email(
  setIsLoading: Function,
  setErrMsg: Function,
  data: MailData,
  captchaData: CaptchaVerify
) {
  setIsLoading(true);
  const form_container = document.querySelector(".form_container")!;
  const success_container = document.querySelector(".form_message .success")!;
  const error_container = document.querySelector(".form_message .error")!;
  fetch('/api/contact/', {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "mail_data": data, "captcha_data": captchaData })
  })
    .then(res => res.json())
    .then(res => {
      form_container.classList.add("message-received");
      if (res.sent) {
        setTimeout(() => {
          success_container.classList.add("active");
        }, 300);
      } else {
        setTimeout(() => {
          error_container.classList.add("active");
        }, 300);
        setErrMsg(res.error);
      }
    })
    .finally(() => {
      setIsLoading(false);
      setTimeout(() => {
        form_container.scrollIntoView(
          { block: "end", inline: "center", behavior: "smooth" }
        )
      }, 900);
      setTimeout(() => {
        success_container.classList.remove("active");
        error_container.classList.remove("active");
      }, 11500);
      setTimeout(() => {
        form_container.classList.remove("message-received");
      }, 12000);
    })
}