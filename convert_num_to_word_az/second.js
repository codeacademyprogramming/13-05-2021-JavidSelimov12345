
function numberToAzerbaijani(number){
    let tek=['sifir','bir','iki','uc','dord','bes','alti','yeddi','sekkiz','doqquz']
    let onluq=['','on','iyirmi','otuz','qirx','elli','altmis','yetmis','seksen','doxsan']
    
    let boyuk=['','min','milyon']

    let cavab

    let numbertostringlen=number.toString().length
    let part=number.toString().split('').map((x)=>Number(x))
    if (numbertostringlen<2){
        cavab=tek[number]
    }
    if (numbertostringlen==2 && part[1]==0){
        cavab=onluq[part[0]]
    }
    if (numbertostringlen==2 && part[1]!=0){
        cavab=onluq[part[0]]+" "+tek[part[1]]
    }
    if (numbertostringlen==3&&part[1]==0&&part[2]==0){
        cavab=tek[part[0]]+' '+'yuz'
    }
    if (numbertostringlen==3&&part[1]==0&&part[2]!=0){
        cavab=tek[part[0]]+' '+'yuz'+' '+tek[part[2]]
    }
    if (numbertostringlen==3&&part[1]!=0&&part[2]!=0){
        cavab=tek[part[0]]+' '+'yuz'+' '+onluq[part[1]]+' '+tek[part[2]]
    }
    if (numbertostringlen==3&&part[1]!=0&&part[2]==0){
        cavab=tek[part[0]]+' '+'yuz'+' '+onluq[part[1]]
    }


    if (numbertostringlen==4&&part[1]==0&&part[2]==0&&part[3]==0){
        cavab=tek[part[0]]+' '+boyuk[1]
    }
    if (numbertostringlen==4&&part[1]==0&&part[2]==0&&part[3]!=0){
        cavab=tek[part[0]]+' '+boyuk[1]+' '+tek[part[3]]
    }
    if (numbertostringlen==4&&part[1]==0&&part[2]!=0&&part[3]!=0){
        cavab=tek[part[0]]+' '+boyuk[1]+' '+onluq[part[2]]+" "+tek[part[3]]
    }
    if (numbertostringlen==4&&part[1]==0&&part[2]!=0&&part[3]==0){
        cavab=tek[part[0]]+' '+boyuk[1]+' '+onluq[part[2]]
    }
    if (numbertostringlen==4&&part[1]!=0&&part[2]==0&&part[3]==0){
        cavab=tek[part[0]]+' '+boyuk[1]+' '+tek[part[0]]+" "+'yuz'
    }
    if (numbertostringlen==4&&part[1]!=0&&part[2]!=0&&part[3]==0){
        cavab=tek[part[0]]+' '+boyuk[1]+' '+tek[part[1]]+" "+'yuz'+' '+onluq[part[2]]
    }
    if (numbertostringlen==4&&part[1]!=0&&part[2]!=0&&part[3]!=0){
        cavab=tek[part[0]]+' '+boyuk[1]+' '+tek[part[1]]+" "+'yuz'+' '+onluq[part[2]]+" "+tek[part[3]]
    }
    else{
        console.log('Zehemt olmasa 1 ve 100 000 arasinda bir reqem daxil et')
    }
    



    console.log(cavab)
}

numberToAzerbaijani(99999)

