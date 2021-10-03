// 안됨. 프로젝트 import 설정 필요하나 현재 프로젝트 범위를 벗어나는것으로 판단해서 일단 적기만 함
import log, {getCurrentHour, MyLogger, _} from './myLogger';
// 객체 형태로 import 됨

const root = "dsdsds";
log(root);

// log(`getTime is ${getTime()}`);
_.log(`current hour is ${getCurrentHour()}`);

const logger = new MyLogger();
_.log(`lectures of Codesquad are ${logger.getLectures()}`);