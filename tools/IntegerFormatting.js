function FormatInteger(int, format) {
    switch (format) {
        case TypeOfIntegerFormat.Delimiters:
            const formattedNumber = Intl.NumberFormat('en-us');
            int = formattedNumber.format(int);
            return int;
        case TypeOfIntegerFormat.Metric:
            if (int < 1e3) return int;
            if (int >= 1e3 && int < 1e6)
                return +(int / 1e3).toFixed(1) + "K";
            if (int >= 1e6 && int < 1e9)
                return +(int / 1e6).toFixed(1) + "M";
            if (int >= 1e9 && int < 1e12)
                return +(int / 1e9).toFixed(1) + "B";
            if (int >= 1e12) return +(int / 1e12).toFixed(1) + "T";
            break;
        case TypeOfIntegerFormat.None:
            return int;
    }
}
