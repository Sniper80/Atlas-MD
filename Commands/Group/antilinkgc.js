const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk } = require("../../Database/dataschema.js");



module.exports = {
    name: "منع الروابط",
    alias: ["alinkgc","antilink"],
    desc: "Enable or disable the antilink feature in a group",
    category: "Group",
    usage: "منع الروابط [تشغيل/ايقاف]",
    react: "🔒",
    start: async (
      Miku,
      m,
      { args, isBotAdmin, isAdmin, isCreator, reply,prefix,pushName }
    ) => {
        if (!isAdmin && !isBotAdmin)
        return Miku.sendMessage(
          m.from,
          {
            text: `Bot and *${pushName}* 
يجب أن يكون كلاهما مشرفا لاستخدام هذا الأمر !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Miku.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });
  
      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, antilink: "true" }).save();
          Miku.sendMessage(
            m.from,
            {
              text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Miku.sendMessage(
            m.from,
            { text: `*
تم تفعيل منع الروابط بنجاح*` },
            { quoted: m }
          );
        } else {
          if (checkdata.antilink == "true")
            return Miku.sendMessage(
                m.from,
                { text: `*متفعل بالفعل*` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { antilink: "true" });
          return Miku.sendMessage(
            m.from,
            { text: `*منع الروابط ممنوع في هذه المجموعه*` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, antilink: "false" }).save();
          return Miku.sendMessage(
            m.from,
            { text: `*Successfully deactivated antilink*` },
            { quoted: m }
          );
        } else {
          if (checkdata.antilink == "false") return Miku.sendMessage(
            m.from,
            { text: `*Already deactivated.*` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { antilink: "false" });
          return Miku.sendMessage(
            m.from,
            { text: `*منع الروابط ممنوع في هذه المجموعه*` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}antilinkgc on`,
            buttonText: { displayText: "On" },
            type: 1,
          },
          {
            buttonId: `${prefix}antilinkgc off`,
            buttonText: { displayText: "Off" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage6} ,
          caption: `\n*「  Group Altilink configuration  」*\n\nPlease click the button below\n*On / Off*\n`,
          footer: `*${botName}*`,
          buttons: buttonsntilink,
          headerType: 4,
        };
        await Miku.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};
