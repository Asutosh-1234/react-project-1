import React from "react"

export default function Logo({ avatarUrl, username, role }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatarUrl}
        alt={username}
        className="w-16 h-16 rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
      />

      <div>
        <h2 className="text-lg font-bold text-gray-800">
          {username}
        </h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}


/* 
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "69f98ecb37670c6a4e3897af",
      "avatar": {
        "url": "https://via.placeholder.com/200x200.png",
        "localPath": "",
        "_id": "69f98ecb37670c6a4e3897ae"
      },
      "username": "doejohn",
      "email": "user.email@domain.com",
      "role": "ADMIN",
      "loginType": "EMAIL_PASSWORD",
      "isEmailVerified": false,
      "createdAt": "2026-05-05T06:31:39.887Z",
      "updatedAt": "2026-05-05T06:57:56.289Z",
      "__v": 0
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5OGVjYjM3NjcwYzZhNGUzODk3YWYiLCJlbWFpbCI6InVzZXIuZW1haWxAZG9tYWluLmNvbSIsInVzZXJuYW1lIjoiZG9lam9obiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3Nzk2NDI3NiwiZXhwIjoxNzc4MDUwNjc2fQ.usC0dYfm_Zsbu8dxNxFqQ6BmhV00n9iRmXwzeEz2yfw",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5OGVjYjM3NjcwYzZhNGUzODk3YWYiLCJpYXQiOjE3Nzc5NjQyNzYsImV4cCI6MTc3ODgyODI3Nn0.h5IMYQrSEn1ZzIB7yweiMkA0PJTL9ThD0M7t2i4yWA8"
  },
  "message": "User logged in successfully",
  "success": true
}

*/