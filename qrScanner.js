const wrapper = document.querySelector(".wrapper"),
    qryinp = wrapper.querySelector("input"),
    gntbtn = wrapper.querySelector(".inp button"),
    qryimg = wrapper.querySelector(".im img");

gntbtn.addEventListener("click", () => {
    wrapper.classList.add("active");
    let qrvalue = qryinp.value;
    if (!qrvalue)
        return;
    qryimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=191x191&data=${qrvalue}`;
});