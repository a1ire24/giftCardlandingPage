import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
	return (
		<Box sx={{ m: 2 }}>
			<Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
				درباره دارا بیشتر بدانید
			</Typography>
			<Typography sx={{ mt:2, fontSize: "12px", lineHeight: "22px" }}>
				داراکارت تنها ابزار خرید مبتنی بر تکنولوژی اعتباری است که از روش
				های معمول و سنتی برای انجام تراکنش فاصله گرفته و توانسته عملیات
				خرید بر مبنای مفاهیم پیشرفته اعتباری را جایگزین رویکردهای جاری
				در کشور نماید. استفاده از سوییچ اعتباری شاتوت، اتصال به هسته
				اعتبارسنجی بانک مرکزی و امکان انجام حسابداری و تسهیم میلیون ها
				تراکنش در لحظه توسط هسته نرم افزاری سی-هور، توانایی عملیاتی
				منحصربفردی را در جایگزینی معاملات اعتباری بجای تراکنش های نقدی
				فراهم می سازد که می تواند ابزاری توانمند در تنوع بخشیدن به
				راهکارهای فروش بدون تحمیل عملیات مالی به کسب و کارها می‌باشد.
			</Typography>
		</Box>
	);
}
