const min_cost = 150
const max_cost = 250
const min_cpc = 10
const max_cpc = 25
function add() {
    cookies += parseInt(cpc)
    document.getElementById("score_text").value = cookies
}
function save() {
    localStorage.setItem("cookies", cookies)
    localStorage.setItem("cost", cost)
    localStorage.setItem("cpc", cpc)
}
function load() {
    cookies = parseInt(localStorage.getItem("cookies"))
    document.getElementById("score_text").value = cookies
    cost = parseInt(localStorage.getItem("cost"))
    document.getElementById("cost_text").value = cost
    cpc = parseInt(localStorage.getItem("cpc"))
    document.getElementById("cpc_text").value = cpc
}
function upgrade() {
    if (cookies >= cost) {
        cookies -= cost
        var after_cost_upgrade = parseInt(Math.floor(Math.random() * (max_cost - min_cost))) + min_cost;
        cost += parseInt(after_cost_upgrade)
        cpc += parseInt(Math.floor(Math.random() * (max_cpc - min_cpc))) + min_cpc;
    }
    document.getElementById("cost_text").value = cost
    document.getElementById("score_text").value = cookies
    document.getElementById("cpc_text").value = cpc
}