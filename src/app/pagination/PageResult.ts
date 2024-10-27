export class PageResult<T> {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    values: T[];

    constructor(page: number, pageSize: number, totalCount: number, totalPages: number, values: T[]) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalCount = totalCount,
            this.totalPages = totalPages,
            this.values = values
    }
}