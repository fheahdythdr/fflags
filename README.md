# rco-fflags
fflag configurations i use with my rco fork

to use them, type url in my rco fork, then enter the url after being prompted to, ex. https://raw.githubusercontent.com/fheahdythdr/rco-fflags/main/FFlag%20and%20FPS%20Unlock/ClientAppSettings.json

got no idea why my old main got added as a contributor, but i guess it's here now

commit amount is very inaccurate, it seems to like just commiting randomly despite nothing changing.

the directories with Vulkan, D3D11 and D3D10 at the end have the FFlagDebug for using those specific graohics libraries enabled, D3D10 is FFlagDebugGraphicsPreferD3D11FL10 for some reason.

if you want to make a custom one for other settings, go to this repo's create-custom, download main.js and setup a settings.json in the same directory as where you downloaded it to (please make a seperate directory for it)

then, just run it and it'll create a ClientAppSettings.json containing whatever you specified it to get.

from there, if you want to use it, create a custom repo and upload it to there, then input the raw url pointing to your custom ClientAppSettings.json into RCO
