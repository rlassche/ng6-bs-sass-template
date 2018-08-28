# Ng6Template

## Contents of this template
* ngx-bootstrap with sass

See demo `ngx-bootstrap`

* Mediawiki integration

See demo `wiki`

[wiki README.md](https://github.com/rlassche/ng6-bs-sass-template/blob/master/src/app/wiki/README.md)

## Configuring the demo
* Wiki

Check `README.md` file in the wiki module.

## Development server

* SSL

Demo certificates available in `ssl`

* Proxy

Access the external mediawiki server through the Angluar proxy.
`proxy.conf.json`

### Proxy

The `mediawiki` server is running seperatly from the Angular development environment. 

The proxy is in `proxy.conf.json`

```
{
  "/mediawiki/*": {
    "target": "http://hp-probook",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/mediawiki": "http://hp-probook/mediawiki"
    }
  }
}
```

## Running the demo

`ng serve --open --host hp-probook --proxy-config proxy.conf.json`
