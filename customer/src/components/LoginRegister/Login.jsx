// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setLogin } from "../../redux/customerSlice";
// import { useNavigate } from "react-router-dom";
// import { customerApi } from "../../services/customerService";

// function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let newErrors = {};
//     if (!formData.email.includes("@")) newErrors.email = "Email không hợp lệ.";
//     if (formData.password.length < 8)
//       newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự.";

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) return;

//     const response = await customerApi.login(formData);
//     console.log(response);
//     if (response.status === "OK") {
//       const { token, data } = response.data;

//       dispatch(setLogin({ token, data }));

//       navigate("/");
//     }
//   };
//   const login = useSelector((state) => state.CustomerStore.customer);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen sm:min-h-0 flex-grow p-8 pb-20 mx-2 sm:py-10">
//       <div className="bg-white shadow-lg rounded-lg p-4 sm:p-10 w-full max-w-md sm:max-w-lg lg:max-w-xl border border-gray-200">
//         <h2 className="text-green-600 text-2xl font-bold text-center mb-6">
//           ĐĂNG NHẬP
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2 font-semibold text-lg text-gray-500">
//             Email:
//           </label>
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}

//           <label className="block mt-3 mb-2 font-semibold text-lg text-gray-500">
//             Mật khẩu:
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}

//           <div className="text-right mt-2">
//             <a href="#" className="text-green-600 text-sm">
//               Quên mật khẩu?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-700"
//           >
//             ĐĂNG NHẬP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerApi } from "../../services/customerService";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Email không hợp lệ.";
    if (formData.password.length < 8)
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      console.log(formData);
      const response = await dispatch(customerApi.loginUser(formData));
      console.log(response);
      if (response.status === "OK") {
        navigate("/");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen sm:min-h-0 flex-grow p-8 pb-20 mx-2 sm:py-10">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-10 w-full max-w-md sm:max-w-lg lg:max-w-xl border border-gray-200">
        <h2 className="text-green-600 text-2xl font-bold text-center mb-6">
          ĐĂNG NHẬP
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold text-lg text-gray-500">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <label className="block mt-3 mb-2 font-semibold text-lg text-gray-500">
            Mật khẩu:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <div className="text-right mt-2">
            <a href="#" className="text-green-600 text-sm">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-700"
          >
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
