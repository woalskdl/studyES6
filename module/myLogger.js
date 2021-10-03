/* utility - 보통 별도의 파일로 구분해서 공통으로 사용 */
const _ = {
    log(data) {
        if(window.console) console.log(data);
    }
}

export default _;

export function log(data){
    console.log(data);
}

export const getCurrentHour = () => {
    return (new Date).getHours();
}

// class
export class MyLogger {
    constructor(props) {
        this.lectures = ['java', 'iOS'];
    }

    getLectures(){
        return this.lectures;
    }

    getTime(){
        return Date.now();
    }
}