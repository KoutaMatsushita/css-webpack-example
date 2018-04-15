// require("main.sass")
import "./main.sass"
import "bootstrap"

import $ from "jquery"

$(document).ready(() => {
  $("[data-toggle=tooltip]").tooltip()
})