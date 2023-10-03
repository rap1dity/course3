#include <iostream>
#include <Windows.h>

using namespace std;

int main() {
	HANDLE mutex = CreateMutex(NULL, FALSE, L"sync");

	STARTUPINFO si1 = {};
	PROCESS_INFORMATION pi1 = {};
	if (CreateProcess(L"OS03_02_1.exe", NULL, NULL, NULL, FALSE, 0, NULL, NULL, &si1, &pi1)) {
		cout << "Process OS03_02_1 started" << endl;
	}

	STARTUPINFO si2 = {};
	PROCESS_INFORMATION pi2 = {};
	if (CreateProcess(L"OS03_02_2.exe", NULL, NULL, NULL, FALSE, 0, NULL, NULL, &si2, &pi2)) {
		cout << "Process OS03_02_2 started" << endl;
	}
	DWORD pid;
	for (int i = 0; i < 100; i++) {
		Sleep(1000);
		WaitForSingleObject(mutex, INFINITE);
		pid = GetCurrentProcessId();
		std::cout << pid << "-" << i + 1 << std::endl;
		ReleaseMutex(mutex);
	}
	CloseHandle(pi1.hProcess);
	CloseHandle(pi1.hThread);
	CloseHandle(pi2.hProcess);
	CloseHandle(pi2.hThread);


	return NULL;
}