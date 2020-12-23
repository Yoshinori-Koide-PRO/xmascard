#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
var asciify = require('asciify-image');

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [

            {
                name: "Just quit.",
                value: () => {
                    console.log("Merry X'mas!\n");
                }
            }
        ]
    }
];
asciify('https://2.bp.blogspot.com/-C0tgnFFp_FM/UZYlZ5K5aZI/AAAAAAAATOc/vIvr0Dzm9_U/s400/christmas_tree.png',{
    fit: `box`,
    width:20, height:20,
}, (_, rendered)=>{

    // Data for the card
    const data = {
        name: chalk.bold.green("From koinori @ PRO"),
        qiita: chalk.gray("https://qiita.com/organizations/") + chalk.hex("#2b82b2").bold("pro-japan"),
        qiitaPerson: chalk.gray("https://qiita.com/") + chalk.bold.cyanBright("koinori"),
        qiitaCalender: chalk.gray("https://qiita.com/advent-calendar/2020/") + chalk.bold.green("pro-japan1"),
        web: chalk.bold.cyan("https://www.pro-japan.co.jp/"),
        mail: chalk.bold.greenBright("qiita_manager@pro-japan.co.jp"),
        npx: chalk.red("npx") + " " + chalk.bold.white("merryxmas"),

        labelQiita: chalk.white.bold("  Organizatons Qiita:"),
        labelPerson: chalk.white.bold("      Personal Qiita:"),
        labelCalender: chalk.white.bold("     Advent Calender:"),
        labelWeb: chalk.white.bold("                 Web:"),
        labelMail: chalk.white.bold("                Mail:"),
        labelCard: chalk.white.bold("                Card:")
    };

    // Build the card
    const me = boxen(
        [
            `${chalk.bold("メリークリスマス !")}`,
            ``,
            `    ${chalk.italic("ご家族の皆様に沢山の幸せが訪れますように。")}`,
            `    ${chalk.italic("厳しい寒さの日が続きますが、くれぐれもお体を大切になさってください。")}`,
            boxen(rendered, {mergin:1, borderColor: "green"}).replace(/^/mg, "                    "),
            `${data.labelQiita}  ${data.qiita}`,
            `${data.labelPerson}  ${data.qiitaPerson}`,
            `${data.labelCalender}  ${data.qiitaCalender}`,
            `${data.labelWeb}  ${data.web}`,
            `${data.labelMail}  ${data.mail}`,
            ``,
            `${data.labelCard}  ${data.npx}`,
            `                                                      ${data.name}`
        ].join("\n"),
        {
            margin: 1,
            float: 'center',
            padding: 1,
            borderStyle: {
                topLeft: '🎄',
                topRight: '✨',
                bottomLeft: '🎉',
                bottomRight: '🎅',
                horizontal: '☃',
                vertical: '❄'
            },
            borderColor: "cyan"
        }
    );

    // Print the card
    console.log(me);

    // Optional tip to help users use the links
    const tip = [
        `Tip: Try ${chalk.cyanBright.bold(
            "cmd/ctrl + click"
        )} on the links above`,
        '',
    ].join("\n");

    // Show the tip 
    console.log(tip);
    
    // Ask the Inquirer questions. 
    prompt(questions).then(answer => answer.action());
});