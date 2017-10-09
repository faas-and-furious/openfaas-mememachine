# OpenFaaS mememachine

Turn any image into a meme

# Deploy

```
$ git clone https://github.com/developius/openfaas-mememachine
$ cd openfaas-mememachine
$ faas-cli deploy -f mememachine.yml -e read_timeout=60,write_timeout=60
```

# Try it out

```
$ echo '{"image": "http://vignette4.wikia.nocookie.net/factpile/images/6/66/Lotr-boromir-1280jpg-b6a4d5_1280w.jpg","top": "ONE DOES NOT SIMPLY JUST","bottom": "DEPLOY TO PRODUCTION"}' | faas-cli invoke mememachine --name mememachine > meme.jpg
```
