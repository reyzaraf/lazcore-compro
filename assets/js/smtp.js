function sendEmail() {
  let message = document.querySelector(".message").value;
  let email = document.querySelector(".email").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ariefarief575@gmail.com",
    Password: "99106A0BB16A34BBA555E29A75184C52AEFD",
    To: email,
    From: "ariefarief575@gmail.com",
    Subject: "Lazcore ID",
    Body: message,
  }).then((message) =>
    alert(message == "OK" ? "Email sent successfully" : message)
  );
}
