
	//init object globally
	let objImage= null;
    let bodyW=null;
    let bodyH=null;
	function init()
    {
        
		objImage=document.getElementById("image");				
		//console.log(objImage.id);
        objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
	}


    $(document).ready(function() {
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
      
        $('.random').each(function(idx, img) {
          var randPosX = Math.floor((Math.random() * bodyWidth));
          var randPosY = Math.floor((Math.random() * bodyHeight));
          console.log(randPosY);
          $(img).css('left', randPosX);
          $(img).css('top', randPosY);
      
        });
      });

    function loadBackgroundImage()
    {
        document.body.style.backgroundImage = "url('data/BG.jpg')";				
        document.body.style.width="100%";
        document.body.style.height="100%";
        document.body.style.backgroundSize="cover";
        // document.body.style.display="auto";
        //
    }
	function getKeyAndMove(e){

        bodyW=document.body.style.getPropertyValue("right");
        console.log(bodyW);
        bodyH=document.body.style.getPropertyValue("bottom")
        //get the body height and width
        //store in variable

		let key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
               moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;						
		}
	}
	function moveLeft(){
        objImage.style.left=parseInt(objImage.style.left)-5 +'px';
        if(parseInt(objImage.style.left)<0)
        {
            objImage.style.left="0px";

        }     
	}
	function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
        if(parseInt(objImage.style.top)<0)
        {
            objImage.style.top="0px";
            
        }
	}
	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
        if(parseInt(objImage.style.left)>0)
        {
            objImage.style.left=objImage.style.left;

           
        }     
	}
    
	function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
        if(parseInt(objImage.style.bottom)>parseInt(document.body.style.getPropertyValue("height")))
        {
            console.log(objImage.style.bottom);
            console.log(parseInt(document.body.style.getPropertyValue("height")));
            console.log(objImage.style.top);
            // objImage.style.top=objImage.style.bottom;

           
        }

	}
	window.onload=init;
