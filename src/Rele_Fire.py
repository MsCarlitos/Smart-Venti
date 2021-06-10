import pyrebase
import RPi.GPIO as GPIO
from time import sleep

config = {
  "apiKey": "AIzaSyAT0j6B6T0pMLeSrNYZhozqHkoDRyKA904",
  "authDomain": "smart-venti.firebaseapp.com",
  "databaseURL": "https://smart-venti-default-rtdb.firebaseio.com",
  "storageBucket": "smart-venti.appspot.com",
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17, GPIO.OUT)


while True:
    salidaRele = db.child("abanico/desliz").get()
    GPIO.output(17, salidaRele.val())
    sleep(1)

GPIO.cleanup()