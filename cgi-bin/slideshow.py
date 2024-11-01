#!/usr/bin/python

import os,sys,json

print ("Content-type: application/json\r\n\r\n")
method = os.environ['REQUEST_METHOD']
data = []
if method == "GET":
    directory = '../images/galleryImages/slideshowImages'
    for filename in os.walk(directory):
        for item in filename[2]: 
            if item.lower().endswith(".jpg") or item.lower().endswith(".png") or item.lower().endswith(".jpeg"):
                data.append(filename[0][3:]+"/"+item)
    print (json.dumps(sorted(data)))
else:
    print (method)