# OpenFaaS mememachine

Turn any image into a meme

![](https://github.com/developius/openfaas-mememachine/raw/master/meme.jpg)

# Getting started
You can deploy in just one step thanks to the remote yaml feature of the [OpenFaaS CLI](https://github.com/openfaas/faas-cli)!

```
$ faas-cli deploy -f https://raw.githubusercontent.com/faas-and-furious/openfaas-mememachine/master/mememachine.yml -e read_timeout=60,write_timeout=60
```

# Try it out

```
$ echo '{"image": "http://vignette4.wikia.nocookie.net/factpile/images/6/66/Lotr-boromir-1280jpg-b6a4d5_1280w.jpg","top": "ONE DOES NOT SIMPLY JUST","bottom": "DEPLOY TO PRODUCTION"}' | faas-cli invoke mememachine > meme.jpg
```
