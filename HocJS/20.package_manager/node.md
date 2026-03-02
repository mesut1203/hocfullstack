#package Manager

-   Công cụ quản lý các thư viện 1 ngôn ngữ lập trình nào đó
    -JS: npm, yarn, pnpm,..
    -PHP: composer

Tác dụng

-   Dễ dàng làm việc các thư viện
    \_ Tải, cập nhật, xóa bỏ,..
-   Làm việc thông qua CLI

Cần thông qua file cấu hình

## Khởi tạo dự án

npm init -y

## Cách cài 1 thư viện

-Simple Dependencies : Thư viện dùng để chạy dự án (Phải có nó thì dự án mới chạy)

npm i tenthuvien@phienban

-Dev Dependencies (Các thư viện hỗ trợ trong quá trình dev)

## Cà đặt tất cả dependencies từ package.json và package

Cài đặt tất cả

Chỉ cài đặt simple dependencies

npm --product

## Loại cài đặt

-   Dependencies Local: --> Thêm vào folder node_modues trong dự án

\_Dependecies Global --> Thêm vào folder node-module của server

## phiên bản Dependecies

## Lệnh update

npm update tenthu@phienban

npm update --> Update tất cả

## Sự khác nhau package.json và package.lock.json

Khi chưa có package.lock.json --> Chạy npm i --> Tải các thư viện trong file package.json phù hợp với phiên bản đã khai báo (Giữ số đầu tiên của phiên bản)

Sau khi cài đặt xong --> npm tự động tạo ra file package-lock.json để khóa phiên bản đã cài

Lần sau chạy npn i --> Lấy theo package-lock.json --> Tránh sai version

Ngoại lệ:
Nếu dùng npm update --> Không đọc trong package-lock.json

## Xóa dependencies

npn uninstall tensanpham
