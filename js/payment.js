var options = {
    "key": "rzp_live_BDHJLsT1OpZCfY", 
    "amount": "50000", 
    "currency": "INR",
    "name": "Child Care India Foundation",
    "description": "",
    "image": "images/logo.png",
   // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Child Care India Foundation",
        "email": "childcareindia.foundation@gmail.com",
        "contact": "7338256896"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#F37254"
    }
};

document.getElementById('rzp-button1').onclick = function(e){
    var amount=document.getElementById('donate_amount').value;
    if(amount==undefined || amount==''){
    	document.getElementById('donate_amount_error').style.display='block';
    	return;
    }else{
    	options.amount=amount*100;
    	togle_payment_div();
    	var rzp1 = new Razorpay(options);
    	document.getElementById('donate_amount_error').style.display='none';
    }
    rzp1.open();
    e.preventDefault();
}

function togle_payment_div(){
	var elem = document.getElementById('payment_div');
	if(elem.classList.contains('active')){
		elem.classList.remove('active');
	}else{
		elem.classList.add('active')
	}
}