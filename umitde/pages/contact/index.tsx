import type { NextPage } from "next";

const Contact: NextPage = () => {
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
                <form action="" method="post">
                  <fieldset>
                    <div className="form_group">
                      <label htmlFor="name">Ad</label>
                      <input type="text" id="name" name="name" placeholder="Jane" className="invalid" required />
                    </div>
                    <div className="form_group has-focus">
                      <label htmlFor="email">E-Posta</label>
                      <input type="email" id="email" name="email" placeholder="jane.doe@gmail.com" required />
                    </div>
                    <div className="form_group">
                      <label htmlFor="message">Mesaj</label>
                      <textarea name="message" id="message" placeholder="Selam Ümit, ... hakkında yazıyorum..." required></textarea>
                    </div>
                  </fieldset>
                  <button className="contact_send">Gönder</button>
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