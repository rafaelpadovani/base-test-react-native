(function ($, moment) {
    var
    sortByDateAsc = function (lhs, rhs) {
        return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
    },
    sortByDateDesc = function (lhs, rhs) {
        return lhs < rhs ? 1 : lhs > rhs ? -1 : 0;
    },
    datesToSort = ["2013-07-11 17:16:59.000", "2013-07-12 16:52:07.000", "2013-06-29 08:39:05.000", "2013-07-19 22:29:31.407", "2013-07-19 22:29:30.407", "2013-06-29 08:40:36.000", "2013-07-04 23:29:30.000", "2013-07-19 22:28:30.000"],
    momentDates = [],
    dates = [];

    for (var i in datesToSort) {
        momentDates.push(moment(datesToSort[i]));
        dates.push(new Date(momentDates[i]));
    }

    for (i in momentDates) {
        $('#unsortedDates').append(momentDates[i].format() + "<br />");
    }

    momentDates.sort(sortByDateAsc);

    for (i in momentDates) {
        $('#sortedDateAsc').append(momentDates[i].format() + "<br />");
    }



}($, moment));
