# LIneA Embedded Discovery Service

Página de Login com botões referente aos provedores de autenticação configurados no SATOSA do LIneA e que podem ser utilizados pelos serviços LIneA que possuem integração SAML com Shibboleth SP.

## Configuração

### Requisitos

1. Serviço integrado e configurado com Shibboleth SP e Apache HTTP;
2. Relação de confiança estabelecida entre o serviço e o SATOSA do LIneA.

### Passos

1. Acesse o diretório `/var/www` do ambiente com Shibboleth SP e Apache; 
2. Faça download deste repositório e acesse o diretório `eds`; 
3. Configure as variáveis `edsPageTitle`, `shibLoginURL` e `targetURL` no arquivo `config.js`;
4. Edite o arquivo `/etc/shibboleth/shibboleth2.xml` alterando o elemento `SSO` existente por:
    ```xml
    <SSO discoveryProtocol="SAMLDS" discoveryURL="https://FQDN-Service/eds">
    SAML2
    </SSO>
    ```
    **OBS.:** Substitua `FQDN-Service` pelo FQDN do serviço em questão, ex. `register.linea.org.br`.
5. Adicione no arquivo de configuração do apache, exemplo `shib.conf`, o seguinte conteúdo:
    ```apache
    Alias "/eds" "/var/www/eds"
    <Directory "/var/www/eds">
        Options FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
    ```
6. Reinicie o Apache

### Observações gerais

1. Esta página só funcionará com um Serviço integrado com SAML por meio do Shibboleth SP. Para outras implementações de SAML serão necessárias alterações no código deste repositório e nas configurações.
2. Para o correto funcionamento dos redirecionamento para os provedores de autenticação presentes na página de login, é importante que seja estabelecida, previamente, a relação de confiança entre o serviço e o SATOSA do LIneA.
3. Para o desempenho correto da página de erro, o link de redirecionamento "sign out and connect with another login" deve ser modificado para a aplicação correspondente.
