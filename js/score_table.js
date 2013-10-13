(function($){
  var tableHeaders = [
      "Order",
      "Teams",
      "4P1W",
      "Crossword",
      "Spelling Bee",
      "Story",
      "Accent",
      "Total"
  ];

  var teams = [
      ["Miwon - Cụt - Tôn",           0, 0, 0, 0, 0 ],
      ["Spoon - Nhồn - DCm",          0, 0, 0, 0, 0 ],
      ["Marchie - Cún - Bông Xù",     0, 0, 0, 0, 0 ],
      ["Tít - Tiểu Thư - Brightsky",  0, 0, 0, 0, 0 ],
      ["Quyên - Papca - Cartoon",     0, 0, 0, 0, 0 ]
  ];

  var nTeams = teams.length;

  $("#scoreTable").html(
    "<div class='datagrid'>" + "\n" +
    "<table>" + "\n" +
    "  <thead>" + genHeaders() + "</thead>" + "\n" +
    "  <tbody>" + genBody() + "</tbody>" + "\n" +
    "</table></div>");

  function genBody() {
    result = "";

    var totals = [];
    var tmp;
    var i, j;

    $.each(teams, function (index, team) {
      tmp = 0;
      for (i = 1; i < team.length; i++) {
        tmp += team[i];
      }
      totals.push(tmp);
    });

    for (i = 0; i < nTeams; i++) {
      for (j = i + 1; j < nTeams; j++) {
        if (totals[i] < totals[j]) {
          tmp = totals[i];
          totals[i] = totals[j];
          totals[j] = tmp;

          tmp = teams[i];
          teams[i] = teams[j];
          teams[j] = tmp;
        }
      }
    }

    $.each(teams, function (index, team) {
      result += "<tr>";
      result += "<td>" + (index + 1) + "</td>";

      $.each(team, function (index, value) {
        result += "<td>";
        if (index == 0) {
          result += "<strong>" + value + "</strong>";
        } else {
          result += value;
        }
        result += "</td>";
      });

      result += "<td><strong style='font-size: 20px;'>";
      result += totals[index];
      result += "</strong></td>";

      result += "</tr>";
    });

    return result;
  }

  function genHeaders() {
    result = "";

    $.each(tableHeaders, function (index, value) {
      result += "<th>" + value + "</th>";
    });

    return "<tr>" + result + "</tr>";
  }

})(jQuery)