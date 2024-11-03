// script.js

// كلاس ليست
// تضيف تحذف سويتش كلاس

// this تعود علي الاب مثل الزر 

//  هكذا نستدعي  كلاس محدداذا كان لهم نفس الكلاس عن طريق انديكس
// var class = document.querySelector("saleh")
// console.log(saleh[2]);سيطبع رقم اتنين

// var ss = document.querySelector("ss")
// console.log(saleh.getAttribute(مثل id))لتغير عليه
// في set attribute  تضيف اتربيوت واسمة 
// الفراغ الاول بارميتر الاتربيوت مثل id class والباراميتر التاني اسمه

// هناك تشيلدرين 
// وتشايلد نود 
// وبارينت 
// وسبلنج 
// // 
// اي نود معناها انها تحسب المسافات وهذا سيء احيانا
// واليمنت معناه يشيل المسافات وياتي بالعنصر علطول






























/* style.css */
/* امسك العناصر
اجعل حدث عند عمله */
// انشاء مخزن المهام



// يوجد اتنين بارميتر الاول متي ينفذ الحدث التاني الحدث 
// يمكن مناداة الحدث او كتابة الفنكشن كالها برحتك
var taskInput = document.querySelector("#taskInput");
var btn = document.querySelector("#btn"); // تأكد من أن لديك معرف للزر
btn.addEventListener("click", fbtn);

function fbtn() {
    var notcomp = document.querySelector(".notcomp");
    var comp = document.querySelector(".comp");

    var taskInput = document.querySelector("#taskInput");

    var task = document.createElement("li");
    var yes = document.createElement("button");
    var no = document.createElement("button");

    yes.innerHTML = "Yes";
    no.innerHTML = "No";

    if (taskInput.value !== "") {
        task.innerHTML = " " + taskInput.value;
        taskInput.value = ""; // مسح القيمة بشكل صحيح
        notcomp.appendChild(task);
        task.appendChild(yes);
        task.appendChild(no);
    }

    yes.addEventListener("click", function() {
        var parent = this.parentElement;
        parent.remove();
        comp.appendChild(parent);
        yes.style.display = "none";
    });

    no.addEventListener("click", function() {
        var parent = this.parentElement;
        parent.remove();
        // يمكن إضافة رسالة هنا إذا أردت
    });
}













