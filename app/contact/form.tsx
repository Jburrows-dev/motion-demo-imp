export default function Form() {
    return (
        <section>
            <form className="one-col" method="POST" action="https://formsubmit.co/el/salada">
            <label htmlFor="Name">Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input name="name" type="text" id="Name" required />
            <label htmlFor="Email">Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="Email" name="email" id="Email" required/>
            <label htmlFor="Message">Message:</label>
            <textarea name="message" id="Message"></textarea>
            <button type='submit'>Send</button>
            </form>
        </section>
    );
}