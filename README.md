# React TypeScript Starter

Template khởi tạo dự án frontend sử dụng **Vite + React + TypeScript**.

Mục tiêu của project là cung cấp một cấu trúc chuẩn, các thư viện cơ bản và cấu hình dùng chung để tái sử dụng cho nhiều dự án React khác nhau.

## 1. Technology Stack

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| Vite            | Build tool và development server |
| React           | UI Library                       |
| TypeScript      | Static typing                    |
| React Router    | Routing                          |
| Axios           | HTTP Client                      |
| Zustand         | Global State Management          |
| TanStack Query  | Server State Management          |
| React Hook Form | Form Management                  |
| Zod             | Schema Validation                |
| Ant Design      | UI Component Library             |
| Lucide React    | Icon Library                     |
| ESLint          | Code Linting                     |
| Prettier        | Code Formatting                  |

## 2. Installation

### Create project

```bash
npm create vite@latest react-ts-starter -- --template react-ts
cd react-ts-starter
npm install
```

### Install dependencies

```bash
npm install react-router axios zustand @tanstack/react-query
npm install react-hook-form zod @hookform/resolvers
npm install antd @ant-design/icons lucide-react
npm install react-router@7
```

### Install development dependencies

```bash
npm install -D prettier eslint-config-prettier @types/node
```

### Run development

```bash
npm run dev
```

### Build production

```bash
npm run build
```

## 3. Folder Structure

### public/

Chứa các static assets được phục vụ trực tiếp từ root URL và không được Vite xử lý như module.

- `images/`: Hình ảnh tĩnh.
- `favicon.ico`: Icon của website.

### src/app/

Chứa các thành phần khởi tạo và cấu hình cấp ứng dụng.

- `App.tsx`: Root component của ứng dụng.
- `router.tsx`: Khai báo và quản lý các route.
- `providers/`: Các Provider dùng chung.
- `AppProvider.tsx`: Kết hợp các Provider như QueryClientProvider và ConfigProvider.

### src/assets/

Chứa tài nguyên được import và quản lý bởi ứng dụng.

- `images/`: Hình ảnh.
- `icons/`: Icon hoặc SVG.
- `styles/`: CSS toàn ứng dụng.
- `global.css`: Global styles, reset CSS và các style chung.
- `variables.css`: CSS variables như màu sắc, font, spacing.

### src/components/

Chứa các React components được tái sử dụng giữa nhiều module.

#### common/

Component dùng chung:

- `AppButton.tsx`: Button dùng chung.
- `AppInput.tsx`: Input dùng chung.
- `AppModal.tsx`: Modal dùng chung.
- `AppLoading.tsx`: Loading component.
- `AppTable.tsx`: Table component.

#### layout/

Chứa các component bố cục:

- `MainLayout.tsx`: Layout chính sau khi đăng nhập.
- `AuthLayout.tsx`: Layout cho xác thực.
- `Header.tsx`: Header.
- `Sidebar.tsx`: Sidebar.
- `Footer.tsx`: Footer.

### src/features/

Chứa các module nghiệp vụ của ứng dụng.

Mỗi feature được tổ chức độc lập theo chức năng.

Ví dụ:

```text
features/
└── auth/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── pages/
```

Ý nghĩa:

- `components/`: Components riêng của feature.
- `hooks/`: Custom hooks riêng của feature.
- `services/`: API services riêng của feature.
- `types/`: Interfaces và Types riêng.
- `pages/`: Các trang thuộc feature.

Khi thêm nghiệp vụ mới, tạo feature tương ứng thay vì gom tất cả vào một thư mục chung.

### src/hooks/

Chứa các custom React hooks được sử dụng chung.

- `useDebounce.ts`: Trì hoãn cập nhật giá trị.
- `usePagination.ts`: Logic phân trang.
- `useLocalStorage.ts`: Đồng bộ React state với LocalStorage.

Các hook chỉ phục vụ một feature nên đặt trong feature tương ứng.

### src/services/

Chứa các chức năng giao tiếp với hệ thống bên ngoài.

#### api/

- `axiosClient.ts`: Axios instance, baseURL, timeout, interceptors.
- `apiResponse.ts`: Các kiểu dữ liệu response dùng chung.

#### storage/

- `localStorage.ts`: Các hàm thao tác LocalStorage thuần JavaScript.

### src/stores/

Quản lý global state bằng Zustand.

- `authStore.ts`: Trạng thái xác thực, thông tin người dùng.
- `appStore.ts`: Trạng thái chung của ứng dụng.

Không sử dụng global store cho những state chỉ cần trong một component.

### src/types/

Chứa TypeScript types và interfaces dùng chung toàn ứng dụng.

- `common.types.ts`: Các kiểu dữ liệu chung.
- `api.types.ts`: Các kiểu dữ liệu API.

Types chỉ phục vụ một feature nên đặt trong `features/<feature>/types`.

### src/utils/

Chứa các hàm tiện ích thuần JavaScript/TypeScript, không phụ thuộc React.

- `constants.ts`: Các hằng số dùng chung.
- `formatDate.ts`: Format ngày tháng.
- `formatNumber.ts`: Format số.
- `validators.ts`: Các hàm kiểm tra dữ liệu dùng chung.

### src/config/

Chứa cấu hình ứng dụng.

- `env.ts`: Đọc và quản lý environment variables.
- Các cấu hình khác có thể bổ sung khi cần.

### src/main.tsx

Entry point của ứng dụng.

Thực hiện:

- Import global CSS.
- Khởi tạo React root.
- Bọc ứng dụng bằng các Provider.
- Render App.

## 4. Root Configuration Files

| File                | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `package.json`      | Dependencies và npm scripts              |
| `package-lock.json` | Lock phiên bản dependencies              |
| `vite.config.ts`    | Cấu hình Vite                            |
| `tsconfig.json`     | TypeScript project configuration         |
| `tsconfig.app.json` | TypeScript configuration cho application |
| `eslint.config.js`  | ESLint configuration                     |
| `.prettierrc`       | Prettier configuration                   |
| `.prettierignore`   | Các file không cần format                |
| `.env.development`  | Environment development                  |
| `.env.production`   | Environment production                   |
| `index.html`        | HTML entry point                         |

## 5. Environment Variables

Development:

```env
VITE_APP_NAME=React Starter
VITE_API_URL=http://localhost:5000/api
```

Production:

```env
VITE_APP_NAME=React Starter
VITE_API_URL=https://api.example.com/api
```

Access environment:

```typescript
import.meta.env.VITE_API_URL;
```

Lưu ý: Không lưu API secret, password hoặc private key trong biến `VITE_`.

## 6. Coding Conventions

### Naming

| Type      | Convention       | Example          |
| --------- | ---------------- | ---------------- |
| Component | PascalCase       | UserTable.tsx    |
| Page      | PascalCase       | UserListPage.tsx |
| Hook      | camelCase + use  | useUsers.ts      |
| Service   | camelCase        | userService.ts   |
| Store     | camelCase        | userStore.ts     |
| Type      | camelCase        | user.types.ts    |
| Utility   | camelCase        | formatDate.ts    |
| Constant  | UPPER_SNAKE_CASE | API_BASE_URL     |

### Architecture Rules

1. Feature-based architecture: Tổ chức code theo nghiệp vụ.
2. Shared components: Component dùng chung đặt trong `components/common`.
3. Feature components: Component riêng đặt trong feature.
4. API calls: Không gọi Axios trực tiếp trong Page.
5. Global state: Chỉ sử dụng Zustand khi thực sự cần thiết.
6. Server state: Sử dụng TanStack Query để quản lý API data.
7. Types: Không gom tất cả interfaces vào một file.
8. Path alias: Sử dụng `@/` thay cho relative imports dài.
9. Separation of concerns: UI, business logic và API services cần được phân tách.
10. Avoid over-engineering: Không tạo thêm abstraction nếu chưa có nhu cầu thực tế.

## 7. NPM Scripts

| Command                | Purpose                        |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start development server       |
| `npm run build`        | Type check và production build |
| `npm run preview`      | Preview production build       |
| `npm run lint`         | Check ESLint                   |
| `npm run format`       | Format source code             |
| `npm run format:check` | Check formatting               |

## 8. Reusing This Template

Khi bắt đầu dự án mới:

1. Clone hoặc copy project template.
2. Đổi tên project trong `package.json`.
3. Cập nhật environment variables.
4. Cập nhật app name và favicon.
5. Thêm các feature cần thiết.
6. Cài dependencies nếu chưa có.
7. Chạy development server.

```bash
npm install
npm run dev
```

## 9. Project Principles

- Keep the architecture simple and scalable.
- Reuse shared components and hooks.
- Separate features by business domain.
- Keep API logic independent from UI.
- Prefer TypeScript strict typing.
- Avoid unnecessary dependencies.
- Keep the starter template free from project-specific business logic.

---

**Project:** react-ts-starter

**Purpose:** Reusable React + TypeScript starter template.

**Architecture:** Feature-based Architecture.
