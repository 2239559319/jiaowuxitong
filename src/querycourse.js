/* 
查询课表功能
*/

function objectToQueryString(obj) {
	return Object.keys(obj)
		.map(function(key) {
			return ''
				.concat(encodeURIComponent(key), '=')
				.concat(encodeURIComponent(obj[key]))
		})
		.join('&')
}

async function getCoursesPost() {
    const res = await fetch('/student/courseSelect/thisSemesterCurriculum/ajaxStudentSchedule/callback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        },
        body: objectToQueryString({
            planCode: '2019-2020-2-1'
        })
    })
    return await res.json()
}

(async() => {
    const msg = await getCoursesPost()
    console.log(msg)
})()