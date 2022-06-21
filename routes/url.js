const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

// Handler 
const route = express.Router()

const Url = require('../models/Url')