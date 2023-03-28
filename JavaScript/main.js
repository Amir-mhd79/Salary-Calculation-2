//Diploma   high-Diploma   Bachelor   Master     phD
// 50000       70000        100000    130000    150000 تومان
// Single   Married
// 200000    400000  تومان
function salary(firstName,lastName,status,nationalCode,email,degree,hours){
    let calcSalary=document.querySelector("button.click")
    calcSalary.addEventListener("click",function(){
        let firstName=document.querySelector("input[name=firstName]").value
        let lastName=document.querySelector("input[name=lastName]").value
        let status=document.querySelector("select[name=maritalStatus]").value
        let nationalCode=document.querySelector("input[name=nationalCode]").value
        let email=document.querySelector("input[name=email]").value
        let degree=document.querySelector("select[name=degree]").value
        let hours=Number(document.querySelector("input[name=hours]").value)
        let grossSalary
        let taxAmount
        let pureSalary
        let finalPay
        let gift
        if (status==="single"){
            gift=200000
            if(degree==="diploma"){
                grossSalary=hours * 50000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="hi-diploma"){
                grossSalary=hours * 70000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="bachelor"){
                grossSalary=hours * 100000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="master"){
                grossSalary=hours * 130000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="phd"){
                grossSalary=hours * 150000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }
        }else{
            gift=400000
            if(degree==="diploma"){
                grossSalary=hours * 50000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="hi-diploma"){
                grossSalary=hours * 70000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="bachelor"){
                grossSalary=hours * 100000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="master"){
                grossSalary=hours * 130000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }else if (degree==="phd"){
                grossSalary=hours * 150000
                taxAmount=0.1 * grossSalary
                pureSalary= grossSalary - taxAmount
                finalPay= pureSalary + gift
                document.querySelector("p.calcSalary").innerHTML=`کاربر گرامی <span class='bold'>${firstName} ${lastName}</span> به شماره ملی <span class='bold'>${nationalCode}</span> <br> حقوق پایه شما <span class='bold'>${grossSalary}</span> تومان می باشد و مقدار <span class='bold'>${taxAmount}</span> تومان به عنوان مالیات از حقوق شما کسر می شود. <br> همچنین مبلغ <span class='bold'>${gift}</span> تومان به عنوان پاداش کاری به شما هدیه داده می شود.<br> حقوق پرداختی این ماه شما برابر با <span class='bold'>${finalPay}</span> تومان می باشد.<br> صورت حساب حقوق شما به ایمیل <span class='bold'>${email}</span> ارسال خواهد شد.`
            }
        }
    })
}
salary(firstName,lastName,status,nationalCode,email,degree,hours)