var config = {
    edsPageTitle: "OnDemand Dev Linea",
    shibLoginURL: "https://ondemand-dev.linea.org.br/Shibboleth.sso/Login",
    targetURL: "https://ondemand-dev.linea.org.br/pun/sys/dashboard",
    idpCafeEntityID: "https://satosa.linea.org.br/linea_saml/proxy",
    idpGoogleEntityID: "https://satosa.linea.org.br/linea/proxy/aHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29t",
    idpGithubEntityID: "https://satosa.linea.org.br/linea/proxy/aHR0cDovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXpl",
    idpCILogonEntityID: "https://satosa.linea.org.br/linea/proxy/aHR0cHM6Ly9jaWxvZ29uLm9yZw==",

    generateLoginUrl: function (idpType) {
        var idpEntityID;
        switch (idpType) {
            case 'cafe':
                idpEntityID = this.idpCafeEntityID;
                break;
            case 'google':
                idpEntityID = this.idpGoogleEntityID;
                break;
            case 'github':
                idpEntityID = this.idpGithubEntityID;
                break;
            case 'cilogon':
                idpEntityID = this.idpCILogonEntityID;
                break;
            default:
                idpEntityID = this.idpCafeEntityID;
        }
        return this.shibLoginURL + '?SAMLDS=1&target=' + this.targetURL + '&entityID=' + idpEntityID;
    }
};

var referrerURL = document.referrer;


if (referrerURL && referrerURL.includes("/155")) {
    document.querySelector(".btn-cafe").style.display = "block";
    document.querySelector(".btn-google").style.display = "block";
}

else if (referrerURL && referrerURL.includes("/174")) {
    document.querySelector(".btn-cafe").style.display = "block";
    document.querySelector(".btn-google").style.display = "none";
}

document.title = config.edsPageTitle;
document.getElementById("edsTitle").innerHTML = config.edsPageTitle;
