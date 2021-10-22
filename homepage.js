const colStyle = {
    transition:'all 2s',
    display:'flex',
    flexDirection:'column',
    width:'50%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
    borderLeft:'3px solid',
    marginRight:'0px'
}

const imgStyle = {
    marginTop:'15px',
    transition:'all 2s',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    border:'10px double'
}

const imgStyleOut ={
    marginTop:'0',
    transition:'all 2s',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '0%',
    border:'0px double'
}



// const colOut = {
//     transition:'2s',
//     marginRight: '20px'
// }

$('.aboutCol').css(colStyle);
$('.aboutCol').css('margin-right','auto')
$('.col1').css('margin-left','auto')
$('img').css(imgStyleOut);

$('.aboutContainer').hover(function(){
    $('.wave').css(imgStyle)
    // $('.aboutCol').css(colStyle)
    
},function(){
 
  $('.wave').css(imgStyleOut)
  $('.aboutCol').css('margin-right', 'auto')
}
)

$('.row').hover(function(){
    $('.webPic').css(imgStyle)
    // $('.aboutCol').css(colStyle)
    console.log('leave')
},function(){
  console.log('enter') 
  $('.webPic').css(imgStyleOut)
  $('.col1').css('margin-left', 'auto')
}
)

$('.quote').hover(function(){
    $('.quotePic').css(imgStyle)
    // $('.aboutCol').css(colStyle)
    console.log('leave')
},function(){
  console.log('enter') 
  $('.quotePic').css(imgStyleOut)
  $('.aboutCol').css('margin-right', 'auto')
})
