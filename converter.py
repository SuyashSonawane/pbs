import os,sys
folder = "./"
for filename in os.listdir(folder):
       infilename = os.path.join(folder,filename)
       if not os.path.isfile(infilename): continue
       oldbase = os.path.splitext(filename)
       newname = infilename.replace('.html', '.php')
       output = os.rename(infilename, newname)
       print(filename)