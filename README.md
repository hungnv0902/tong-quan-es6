# tong-quan-es6
file index.js là phần về hàm HOF
Trong ví dụ trên, chúng ta đã tạo ra một Higher-order function mapForEach chập nhận một mảng và một hàm callback fn. Hàm này lặp trên mảng được cung cấp và gọi hàm callback fn bên trong lệnh gọi hàm newArray.push trên mỗi lần lặp.
Hàm callback fn nhận phần tử hiện tại của mảng và trả về length của phần tử đó, nó được lưu vào bên trong newArray. Sau khi vòng lặp kết thúc, newArray is được trả về và gán đến lenArray.
Ví dụ 2 
Khi ta chạy hàm numberGenerator() thì sẽ return về hàm checkNumber() và đoạn code trong hàm checkNumber() cũng chưa được thực thi. Trong trường hợp này, numberFunc tham chiếu đến một instance checkNumber(). Ta gọi checkNumber() là một closure function hay numberGenerator áp dụng kỹ thuật closure đều được.

file index.html là bài tập 1, 3, 4
