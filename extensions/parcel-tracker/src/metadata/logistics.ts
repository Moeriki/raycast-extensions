export const findVendorByCode = (code: string): IVendor => {
  return logistics.find((l) => l.code === code) || { code: "", name: "" };
};

export interface IVendor {
  code: string;
  name: string;
}

export const logistics = [
  { code: "04", name: "CJ대한통운" },
  { code: "01", name: "우체국택배" },
  { code: "05", name: "한진택배" },
  { code: "08", name: "롯데택배" },
  { code: "06", name: "로젠택배" },
  { code: "54", name: "홈픽택배" },
  { code: "23", name: "경동택배" },
  { code: "22", name: "대신택배" },
  { code: "11", name: "일양로지스" },
  { code: "32", name: "합동택배" },
  { code: "18", name: "건영택배" },
  { code: "17", name: "천일택배" },
  { code: "20", name: "한덱스" },
  { code: "16", name: "한의사랑택배" },
  { code: "24", name: "CVSnet 편의점택배(GS25)" },
  { code: "46", name: "CU 편의점택배" },
  { code: "12", name: "EMS" },
  { code: "25", name: "TNT Express" },
  { code: "14", name: "UPS" },
  { code: "21", name: "Fedex" },
  { code: "26", name: "USPS" },
  { code: "34", name: "i-Parcel" },
  { code: "33", name: "DHL Global Mail" },
  { code: "37", name: "LX판토스" },
  { code: "28", name: "GSMNtoN" },
  { code: "38", name: "ECMS Express" },
  { code: "30", name: "KGL네트웍스" },
  { code: "40", name: "굿투럭" },
  { code: "45", name: "호남택배" },
  { code: "41", name: "GSI Express" },
  { code: "44", name: "SLX택배" },
  { code: "47", name: "우리한방택배" },
  { code: "52", name: "세방" },
  { code: "57", name: "Cway Express" },
  { code: "60", name: "YJS글로벌(영국)" },
  { code: "51", name: "성원글로벌카고" },
  { code: "62", name: "홈이노베이션로지스" },
  { code: "63", name: "은하쉬핑" },
  { code: "66", name: "Giant Network Group" },
  { code: "64", name: "FLF퍼레버택배" },
  { code: "53", name: "농협택배" },
  { code: "65", name: "YJS글로벌(월드)" },
  { code: "67", name: "디디로지스" },
  { code: "69", name: "대림통운" },
  { code: "70", name: "LOTOS CORPORATION" },
  { code: "43", name: "애니트랙" },
  { code: "72", name: "성훈물류" },
  { code: "71", name: "IK물류" },
  { code: "79", name: "로지스밸리택배" },
  { code: "81", name: "제니엘시스템" },
  { code: "84", name: "스마트로지스" },
  { code: "87", name: "이투마스(ETOMARS)" },
  { code: "85", name: "풀앳홈" },
  { code: "82", name: "프레시솔루션" },
  { code: "88", name: "큐런택배" },
  { code: "89", name: "두발히어로" },
  { code: "91", name: "하이브시티" },
  { code: "94", name: "오늘의픽업" },
  { code: "93", name: "팬스타국제특송(PIEX)" },
  { code: "92", name: "지니고 당일배송" },
  { code: "96", name: "로지스밸리" },
  { code: "99", name: "롯데국제특송" },
  { code: "100", name: "나은물류" },
  { code: "101", name: "한샘서비스원 택배" },
  { code: "102", name: "배송하기좋은날 (SHIPNERGY)" },
  { code: "103", name: "NDEX KOREA" },
  { code: "104", name: "도도플렉스(dodoflex)" },
  { code: "105", name: "브릿지로지스㈜" },
  { code: "106", name: "허브넷로지스틱스" },
  { code: "108", name: "MEXGLOBAL" },
  { code: "49", name: "A.C.E EXPRESS INC" },
  { code: "113", name: "썬더히어로" },
  { code: "112", name: "1004홈" },
  { code: "114", name: "㈜캐나다쉬핑" },
  { code: "110", name: "부릉" },
  { code: "117", name: "YUNDA EXPRESS" },
  { code: "120", name: "발렉스 특수물류" },
  { code: "109", name: "윈핸드해운항공" },
  { code: "119", name: "핑퐁" },
  { code: "121", name: "바바바(bababa)" },
  { code: "122", name: "BAIMA EXPRESS" },
  { code: "123", name: "엔티엘피스" },
  { code: "124", name: "LTL" },
  { code: "125", name: "GTS 로지스" },
  { code: "126", name: "㈜올타코리아" },
  { code: "128", name: "판월드로지스틱㈜" },
  { code: "132", name: "지오피" },
  { code: "95", name: "큐익스프레스" },
  { code: "130", name: "로지스파트너" },
  { code: "131", name: "딜리래빗" },
  { code: "129", name: "홈픽 오늘도착" },
];