function solution(id_list, report, k) {
  // 중복 제거
  const REPORT_INFO_LIST = [...new Set(report)];
  
  // 신고당한 횟수
  const REPORTED_CNT = new Map();
  for(const REPORT_INFO of REPORT_INFO_LIST) {
      const [_, REPORTED] = REPORT_INFO.split(' ');
      
      // 신고당한 횟수가 이미 저장되어 있으면 1을 더해주고,
      // REPORTED_CNT 안에 없으면 1로 초기화
      REPORTED_CNT.set(REPORTED, REPORTED_CNT.get(REPORTED) + 1 || 1);
  }
  
  // 메일받은 횟수
  const RECEIVED_MAIL_CNT = new Map()
  for(const REPORT_INFO of REPORT_INFO_LIST) {
      const [REPORTER, REPORTED] = REPORT_INFO.split(' ');
      
      // 만약 신고당한 사람이 k이상 신고당했다면,
      if(REPORTED_CNT.get(REPORTED) >= k) {
          // 신고한 사람이 받을 메일 수가 이미 저장되어 있다면 1을 더해주고,
          // RECEIVED_MAIL_CNT 안에 없으면 1로 초기화
          RECEIVED_MAIL_CNT.set(REPORTER, RECEIVED_MAIL_CNT.get(REPORTER) + 1 || 1);
      }
  }
  
  // 값이 없으면 0으로 채워서 return
  const RESULT = id_list.map(id => RECEIVED_MAIL_CNT.get(id) || 0);
  return RESULT;
}