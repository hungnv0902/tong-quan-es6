// Bai 1
const obj = {
    name: 'Bình Nguyễn',
    hourlyRate: 50000,
    timesheets: [
        {
            date: '1/12/2021',
            hours: 5
        },
        {
            date: '2/12/2021',
            hours: 8
        },
        {
            date: '3/12/2021',
            hours: 8
        },
        {
            date: '4/12/2021',
            hours: 5
        },
        {
            date: '6/12/2021',
            hours: 8
        },
        {
            date: '7/12/2021',
            hours: 4
        },
        {
            date: '8/12/2021',
            hours: 4
        }
    ]
};
// cach 1
let arr = [];

for (const timeSheet of obj.timesheets) {
	arr.push(timeSheet.hours);
};

console.log(arr);
const totalHours = arr.reduce((total, currentValue) => {
	return total + currentValue;
});
//Cach 2
const totalHours = obj.timesheets.reduce((total, currentValue) => {
	console.log(total, 'total')
	return total + currentValue.hours;
}, 0);

console.log("Luong cua nhan vien la " + totalHours*obj.hourlyRate);


//Bai 2
const checkLicensePlateInHanoi = (licensePlate) => {
	const array = ['29', '30', '31', '32', '33', '40'];
	for (const value of array) {
		if (licensePlate.startsWith(value)) {
			return true;
		}
	}
	return false;
}

const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-09813", "33H2-21231"];

let listLicensePlateInHanois = [];

for (const value of listLicensePlates) {
	if (checkLicensePlateInHanoi(value)) {
		listLicensePlateInHanois.push(value);
	}
}

console.log(listLicensePlateInHanois, 'listLicensePlateInHanois');

//Bai 3

const array = [
	{
		name: "Ha",
		gender: 'female',
		poin: 8
	},
	{
		name: "Huy",
		gender: 'male',
		poin: 9
	},
	{
		name: "Hung",
		gender: 'male',
		poin: 7
	},
	{
		name: "Phuong",
		gender: 'female',
		poin: 6
	},
	{
		name: "Huyen",
		gender: 'female',
		poin: 10
	},
	{
		name: "Long",
		gender: 'male',
		poin: 5
	},
	{
		name: "Luan",
		gender: 'male',
		poin: 10
	},
	{
		name: "Linh",
		gender: 'female',
		poin: 8
	}

];

let males = 0;
let females = 0;
let totalMalePoin = 0;
let totalFemalePoin =0

for (const value of array) {
	if (value.gender === "male") {
		totalMalePoin = totalMalePoin + value.poin;
		males++;
	} else {
		totalFemalePoin = totalFemalePoin + value.poin;
		females++;
	}
};

console.log("Diem trung binh cua nam: " + totalMalePoin/males);

console.log("Diem trung binh cua nu: " + totalFemalePoin/females);

//Bai 4

const array = ['chủ nhật', 'thứ 2', 'thứ 3', 'thứ 4', 'thứ 5', 'thứ 6', 'thứ 7'];

const currentDay = new Date();

const dayIndex = currentDay.getDay();

console.log("Hôm nay là " + array[dayIndex]);
