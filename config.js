var config = {
    edsPageTitle: "Comanage Dev Linea",
    shibLoginURL: "https://comanage-dev.linea.org.br/Shibboleth.sso/Login",
    targetURL: "https://comanage-dev.linea.org.br/registry/auth/login",
    //idpCafeEntityID: "https://idp4.cafeexpresso.rnp.br/idp/shibboleth",
    idpCafeEntityID: "https://satosa-dev.linea.org.br/linea_saml/proxy",
    idpGoogleEntityID: "https://satosa-dev.linea.org.br/linea_saml_mirror/proxy/aHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29t",
    idpGithubEntityID: "https://idp.github.com/idp/shibboleth",
  
    generateLoginUrl: function(idpType) {
        var idpEntityID;
        switch(idpType) {
            case 'cafe':
                idpEntityID = this.idpCafeEntityID;
                break;
            case 'google':
                idpEntityID = this.idpGoogleEntityID;
                break;
            case 'github':
                idpEntityID = this.idpGithubEntityID;
                break;
            default:
                idpEntityID = this.idpCafeEntityID;
        }
        return this.shibLoginURL + '?SAMLDS=1&target=' + this.targetURL + '&entityID=' + idpEntityID;
    }
};
document.title = config.edsPageTitle;
document.getElementById("edsTitle").innerHTML = config.edsPageTitle; 
