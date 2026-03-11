# Phân tích CSS Selector

## Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?

Trong CSS, độ ưu tiên (specificity) của selector được sắp xếp theo thứ tự sau:

Inline style > ID selector > Class selector > Tag selector

Ví dụ:

* Inline style: `style="color:red"` → cao nhất
* ID selector: `#main`
* Class selector: `.title`
* Tag selector: `h1`

Vì vậy **inline style có độ ưu tiên cao nhất trong CSS**.

---

## Câu 2: Nếu một phần tử HTML có cả `h1`, `.title`, và `#main` cùng set color — selector nào thắng? Tại sao?

Selector **`#main` sẽ thắng**.

Ví dụ:

```css
h1{
 color:black;
}

.title{
 color:blue;
}

#main{
 color:red;
}
```

Độ ưu tiên CSS:

ID > Class > Tag

Trong đó:

* `h1` là **tag selector**
* `.title` là **class selector**
* `#main` là **ID selector**

Vì **ID có độ ưu tiên cao hơn class và tag**, nên màu của `#main` sẽ được áp dụng.

---

## Câu 3: Nếu thêm `style="color:pink"` trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?

Ví dụ:

```html
<h1 id="main" class="title" style="color:pink">Hello</h1>
```

Màu cuối cùng hiển thị sẽ là **pink**.

Lý do:

Inline style có độ ưu tiên cao nhất trong CSS.

Thứ tự ưu tiên:

Inline style > ID > Class > Tag

Vì vậy inline style sẽ **ghi đè (override) tất cả các selector khác**.

---

## Câu 4: Tại sao `theme.css` có thể override style từ `base.css`? Điều kiện để override thành công là gì?

Ví dụ trong HTML:

```html
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="theme.css">
```

CSS được đọc **từ trên xuống dưới**.

File CSS được load **sau** sẽ có khả năng ghi đè file trước nếu selector có cùng độ ưu tiên.

Điều kiện để `theme.css` override `base.css`:

1. Selector giống nhau
2. Hoặc selector trong `theme.css` có độ ưu tiên cao hơn
3. Hoặc `theme.css` được load sau `base.css`

---

## Câu 5: Trong project có hai phần tử đều dùng class `.title` nhưng hiển thị màu khác nhau. Giải thích tại sao.

Điều này có thể xảy ra vì nhiều lý do:

### 1. Có inline style

Ví dụ:

```html
<h1 class="title" style="color:green">Title 1</h1>
<h1 class="title">Title 2</h1>
```

Phần tử có inline style sẽ có màu khác vì **inline style có độ ưu tiên cao nhất**.

---

### 2. CSS bị override bởi file khác

Ví dụ trong `theme.css`:

```css
.title{
 color: purple;
}
```

Nếu file này được load sau thì nó sẽ **ghi đè CSS trước đó**.

---

## Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.

Ví dụ phần tử:

```html
<h1 class="title" id="special" style="color:brown">DASHBOARD</h1>
```

Các selector có thể tác động vào phần tử này:

* `h1`
* `.title`
* `#special`
* `style="color:brown"`

Độ ưu tiên CSS:

Inline style > ID > Class > Tag

Selector thắng cuối cùng là:

```
style="color:brown"
```

Vì inline style có độ ưu tiên cao nhất nên **màu hiển thị cuối cùng của chữ là brown**.
