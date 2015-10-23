// For all animation on phone or tablet


// 1------  multiple materials flash animation (like pictures, characters or other materials)

// -- "_DisplayTimer" used for terminate loop by yourself(Attention: I use _DisplayTimer as a global variable, you use "clearTimeout(_DisplayTimer)" to terminate where u want)

// -- "myArray" is your pictures, characters or others stream materials stored(should be an Array,please make sure they are use same regX and regY)

// -- "myLoop" is how many times you want to exec(should be a number, -1 means infinite)

// -- "intervalTime" is interval time(should be a positive number)

// -- "animationType": 0 means a b c ...; 1 means a ab abc ...;(only should be 0 or 1)

// -- "stayOrHide": after animation, stay on canvas or hide (true,1 or false,0)

function FLASHANIMATION(myArray,myLoop,intervalTime,animationType,stayOrHide){
    //console.log("type   "+typeof(myArray));
    var checkFlag=checkType(myArray,myLoop,intervalTime,animationType);
    var charCounter=1;
    if(checkFlag)
        loopStart(charCounter,myArray,myLoop,intervalTime,animationType,stayOrHide);
    else
        console.log("terminate animation because of error....");
}

function loopStart(charCounter,myArray,myLoop,intervalTime,animationType,stayOrHide){
    var loop=myLoop;
    var length=myArray.length;
    if(charCounter==1){
        myArray[0].visible=true;
    }
    if(loop==1 || loop==0){
        setTimeout(_hello(charCounter,myArray[charCounter-1],myArray[charCounter],length,myArray,loop,intervalTime,animationType,stayOrHide),intervalTime);
    }else{
        _DisplayTimer=setTimeout(_hello(charCounter,myArray[charCounter-1],myArray[charCounter],length,myArray,loop,intervalTime,animationType,stayOrHide),intervalTime);
    }
}
    

function _hello(charCounter,a,b,length,myArray,loop,intervalTime,animationType,stayOrHide){
       return function(){
           //return hello(charCounter,a,b,length,myArray,loop,intervalTime,animationType);
            hello(charCounter,a,b,length,myArray,loop,intervalTime,animationType,stayOrHide);
       };
}

function hello(charCounter,a,b,length,myArray,loop,intervalTime,animationType,stayOrHide){
    if (charCounter < length) {
        if(animationType==0){
           a.visible = false;
           b.visible = true; 
        }else{
           b.visible = true; 
        }
        charCounter++;
        loopStart(charCounter, myArray, loop, intervalTime, animationType,stayOrHide);
    } else {
        charCounter = 1;
        
        if (loop > 1) {
            for (var i = 0; i < length; i++)
                myArray[i].visible = false;
                loop--;
            loopStart(charCounter, myArray, loop, intervalTime, animationType,stayOrHide);
        } else if (loop == 0 || loop==1) {
            if(!stayOrHide){
                for (var i = 0; i < length; i++)
                    myArray[i].visible = false;
            }
            return;
        } else if (loop == -1) {
            console.log("loop  "+loop);
            for (var i = 0; i < length; i++)
                myArray[i].visible = false;
            //for(var t = Date.now();Date.now() - t <= 5000;);
            loopStart(charCounter, myArray, loop, intervalTime, animationType,stayOrHide);
        } else {
            console.log("wrong loop number .... please check.....");
        }
    }
}

function checkType(myArray,myLoop,intervalTime,animationType){
    // check myArray type
    if(myArray.constructor != Array){
        console.log("parameter 'myArray type' wrong....please check your parameters"+myArray.constructor);
        return false;
    }
    
    // check myLoop type and number
    if(myLoop.constructor!= Number){
        console.log("parameter 'myLoop type' wrong....please check your parameters");
        return false;
    }else{
        if(myLoop<-1){
            console.log("parameter 'myLoop value' wrong....please input a number more than or equal -1");
        return false;
        }
    }
    
    // check intervalTime type and number
    if(intervalTime.constructor!= Number){
        console.log("parameter 'intervalTime type' wrong....please check your parameters");
        return false;
    }else{
        if(intervalTime<=0){
            console.log("parameter 'intervalTime value' wrong....please input a number more than 0");
        return false;
        }
    }
    
    // check animationType type and number
    if(animationType.constructor!= Number){
        console.log("parameter 'animationType type' wrong....please check your parameters");
        return false;
    }else{
        if(animationType!=0 && animationType!=1){
            console.log("parameter 'animationType value' wrong....it only can be 0 or 1");
        return false;
        }
    }
    return true;
}
// 1 over------  multiple materials flash animation 




// 2 ------  random assets distribution

// -- "myArray" is your assets array which you want to display

// -- "myAnimationArray" click event animation array, 2 dimension array

// -- "screen_width" your assets display stage width;

// -- "screen_height" your assets display stage height;

// -- "assets_row" total rows;

// -- "assets_column" total column;

// -- "startX,startY" your display stage start point X and Y;

// -- "max" how many elements you need to get 

function ASSETSDISTRIBUTION(myArray,myAnimationArray,screen_width,screen_height,assets_row,assets_column,startX,startY,max){
    /*console.log("max   "+ max);*/
    /*console.log("assets_row*assets_column   "+assets_row*assets_column);*/
    if(max!=assets_row*assets_column){
        console.log("check your assets number... they do not match row and column....");
        return;
    }
    var k=0;
    var isDisplay=[];
    /*console.log("I am start  ");*/
    while(k<max){
        var myIndex=Math.floor(Math.random()*myArray.length);
        if(isDisplay[myIndex]!=true){
            //console.log("myArray  "+myArray);
            myArray[myIndex].index=myIndex;
            //console.log("myIndex  "+myArray[myIndex].index);
            
            myArray[myIndex].x = startX + (0.5 + k % assets_column) * screen_width / assets_column;
            myArray[myIndex].y = startY + (0.5 + Math.floor(k / assets_column)) * screen_height/ assets_row;
            myArray[myIndex].visible = true;
            isDisplay[myIndex]=true;
            if (myAnimationArray != null) {
                for (var i = 0; i < myAnimationArray[0].length; i++) {
                    myAnimationArray[myIndex][i].x = myArray[myIndex].x;
                    myAnimationArray[myIndex][i].y = myArray[myIndex].y;
                }
            }
            k++;
        }
    }       
}
// 2 over ------  random assets distribution 



