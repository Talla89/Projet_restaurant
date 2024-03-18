function W3docs()
{
    let name = document.forms["RegForm"]["Nom"];
    let email = document.forms["RegForm"]["Email"];
    let phone = document.forms["RegForm"]["Téléphone"];
    let password = document.forms["RegForm"]["Mot de passe"];
    let comment = document.forms["RegForm"]["Messge"];

    if (name.value == "")
    {
        alert("Mettez votre nom.");
        name.focus();
        return false;
    }

    if (email.value == "")
    {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (phone.value == "")
    {
        alert("Mettez votre numéro de téléphone.");
        phone.focus();
        return false;
    }
    if (password.value == "")
    {
        alert("Saisissez votre mot de passe");
        password.focus();
        return false;
    }

    if (comment.value == "")
    {
        alert("Écrivez un message.");
        comment.focus();
        return false;
    }
    return true;
}
