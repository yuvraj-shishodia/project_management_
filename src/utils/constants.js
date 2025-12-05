export const UserRolesEnum  = {
    ADMIN   : "admin",
    PROJECT_ADMIN : "project-admin",
    Member  : "member"
}

export const AvailableUserRole = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
    TODO        : "to-do",
    IN_PROGRESS: "in-progress",
    DONE        : "done"
}

export const AvailableTaskStatus = Object.values(TaskStatusEnum);