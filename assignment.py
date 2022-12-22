d={}
loc=int(input("enter no of locations:"))
while(loc):
    location=input("enter location name:")
    vc=int(input("enter vacancies:"))
    d[location]=vc
    loc-=1
n=int(input("enter no of applicants:"))
ll=[{} for i in range(1000)]
while(n):
    name=input("enter your name:")
    city=""
    li=list(map(str,input("enter your prefered locations:").split()))
    key=0
    for i in name:
        key+=ord(i)
    for i in li:
        if d[i]>0:
            d[i]-=1
            city=i
            break
    ll[key][name]=city
    n-=1
def search(ll,name):
    key=0
    for i in name:
        key+=ord(i)
    for i,j in ll[key].items():
        if i==name:
            return j
vi=input("enter name for searching:")
print(search(ll,vi))