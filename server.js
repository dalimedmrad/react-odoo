const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const Odoo = require("odoo-xmlrpc");
const Odoo = require("odoo-await");
const request = require("request");

app.get("/api/login", async (req, res) => {
  // const odoo = new Odoo({
  //   url: `http://141.94.65.215`,
  //   port: 8069,
  //   db: `project_041022`,
  //   username: `admin@project`,
  //   password: `123`,
  // });
  // odoo.connect(function (err, result) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Connected to Odoo server.");
  //   return res.json({ result });
  // });
  // const odoo = new Odoo({
  //   baseUrl: "http://141.94.65.215",
  //   port: 8069, // see comments below regarding port option
  //   db: "project_041022",
  //   username: "admin@project",
  //   password: "123",
  // });
  // try {
  //   const result = await odoo.connect();
  //   res.json(result);
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
  var headers = {
    "Content-Type": "application/json",
  };

  var options = {
    url: "http://141.94.65.215:8069/web/session/authenticate",
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      jsonrpc: "2.0",
      params: {
        db: "project_041022",
        login: "admin@project",
        password: "123",
      },
    }),
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(response);
      res.send(body);
    }
    // console.log(body);
    // console.log(response);
    // console.log(error);
  }

  request(options, callback);
});

// app.get("/api/getprojects", (req, res) => {
//   const odoo = new Odoo({
//     url: `http://141.94.65.215`,
//     port: 8069,
//     db: `project_041022`,
//     username: `admin@project`,
//     password: `123`,
//   });
//   odoo.connect(function (err, result) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Connected to Odoo server.");
//     // return res.json(result);
//     // console.log(result);
//     var inParams = [];
//     inParams.push([["is_internal_project", "=", false]]);
//     inParams.push([
//       "name",
//       "partner_id",
//       "allow_timesheets",
//       "timesheet_count",
//       "remaining_hours",
//       "has_planned_hours_tasks",
//       "encode_uom_in_days",
//       "commercial_partner_id",
//       "color",
//       "task_count",
//       "label_tasks",
//       "alias_id",
//       "alias_name",
//       "alias_domain",
//       "is_favorite",
//       "rating_percentage_satisfaction",
//       "rating_status",
//       "rating_active",
//       "analytic_account_id",
//       "date",
//       "doc_count",
//       "privacy_visibility",
//       "last_update_color",
//       "last_update_status",
//       "tag_ids",
//       "date_start",
//       "activity_ids",
//       "activity_exception_decoration",
//       "activity_exception_icon",
//       "activity_state",
//       "user_id",
//       "id",
//     ]);
//     var params = [];
//     params.push(inParams);
//     // params = [
//     //   (model = "project.project"),
//     //   (domain = [["is_internal_project", "=", false]]),
//     //   (fields = [
//     //     "name",
//     //     "partner_id",
//     //     "allow_timesheets",
//     //     "timesheet_count",
//     //     "remaining_hours",
//     //     "has_planned_hours_tasks",
//     //     "encode_uom_in_days",
//     //     "commercial_partner_id",
//     //     "color",
//     //     "task_count",
//     //     "label_tasks",
//     //     "alias_id",
//     //     "alias_name",
//     //     "alias_domain",
//     //     "is_favorite",
//     //     "rating_percentage_satisfaction",
//     //     "rating_status",
//     //     "rating_active",
//     //     "analytic_account_id",
//     //     "date",
//     //     "doc_count",
//     //     "privacy_visibility",
//     //     "last_update_color",
//     //     "last_update_status",
//     //     "tag_ids",
//     //     "date_start",
//     //     "activity_ids",
//     //     "activity_exception_decoration",
//     //     "activity_exception_icon",
//     //     "activity_state",
//     //     "user_id",
//     //     "id",
//     //   ]),
//     //   // (limit = 80),
//     //   // (sort = ""),
//     //   // (context = {
//     //   //   lang: "fr_FR",
//     //   //   tz: "Africa/Tunis",
//     //   //   uid: 2,
//     //   //   allowed_company_ids: [1],
//     //   //   bin_size: true,
//     //   // }),
//     // ];
//     odoo.execute_kw(
//       "project.project",
//       "search_read",
//       params,
//       function (err, value) {
//         if (err) {
//           return console.log(err);
//         }
//         // console.log("Result: ", value);
//         return res.json(value);
//       }
//     );
//   });
// });

// app.get("/api/gettasks", (req, res) => {
//   const odoo = new Odoo({
//     url: `http://141.94.65.215`,
//     port: 8069,
//     db: `project_041022`,
//     username: `admin@project`,
//     password: `123`,
//   });
//   odoo.connect(function (err, result) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Connected to Odoo server.");
//     // return res.json(result);
//     // console.log(result);
//     var inParams = [];
//     inParams.push(["&", ["stage_id", "=", 1], ["display_project_id", "=", 1]]);
//     inParams.push([
//       "color",
//       "priority",
//       "stage_id",
//       "user_ids",
//       "partner_id",
//       "sequence",
//       "is_closed",
//       "partner_is_company",
//       "displayed_image_id",
//       "active",
//       "legend_blocked",
//       "legend_normal",
//       "legend_done",
//       "activity_ids",
//       "activity_state",
//       "rating_last_value",
//       "rating_ids",
//       "allow_subtasks",
//       "child_text",
//       "is_private",
//       "progress",
//       "remaining_hours",
//       "planned_hours",
//       "allow_timesheets",
//       "encode_uom_in_days",
//       "name",
//       "project_id",
//       "commercial_partner_id",
//       "email_from",
//       "tag_ids",
//       "date_deadline",
//       "activity_exception_decoration",
//       "activity_exception_icon",
//       "kanban_state",
//     ]);
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw(
//       "project.task",
//       "search_read",
//       params,
//       function (err, value) {
//         if (err) {
//           return console.log(err);
//         }
//         // console.log("Result: ", value);
//         return res.json(value);
//       }
//     );
//   });
// });

// app.get("/api/gettasks1", (req, res) => {
//   const odoo = new Odoo({
//     url: `http://141.94.65.215`,
//     port: 8069,
//     db: `project_041022`,
//     username: `admin@project`,
//     password: `123`,
//   });
//   odoo.connect(function (err, result) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Connected to Odoo server.");
//     // return res.json(result);
//     // console.log(result);
//     var inParams = [];
//     inParams.push(["&", ["stage_id", "=", 2], ["display_project_id", "=", 1]]);
//     inParams.push([
//       "color",
//       "priority",
//       "stage_id",
//       "user_ids",
//       "partner_id",
//       "sequence",
//       "is_closed",
//       "partner_is_company",
//       "displayed_image_id",
//       "active",
//       "legend_blocked",
//       "legend_normal",
//       "legend_done",
//       "activity_ids",
//       "activity_state",
//       "rating_last_value",
//       "rating_ids",
//       "allow_subtasks",
//       "child_text",
//       "is_private",
//       "progress",
//       "remaining_hours",
//       "planned_hours",
//       "allow_timesheets",
//       "encode_uom_in_days",
//       "name",
//       "project_id",
//       "commercial_partner_id",
//       "email_from",
//       "tag_ids",
//       "date_deadline",
//       "activity_exception_decoration",
//       "activity_exception_icon",
//       "kanban_state",
//     ]);
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw(
//       "project.task",
//       "search_read",
//       params,
//       function (err, value) {
//         if (err) {
//           return console.log(err);
//         }
//         // console.log("Result: ", value);
//         return res.json(value);
//       }
//     );
//   });
// });
app.listen(port, () => console.log(`Listening on port ${port}`));
