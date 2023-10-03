#include <iostream>
#include <Windows.h>

int main() {
	HANDLE mutex = CreateMutex(NULL, FALSE, L"sync");
	DWORD pid;
	for (int i = 0; i < 125; i++) {
		Sleep(1000);
		WaitForSingleObject(mutex, INFINITE);
		pid = GetCurrentProcessId();
		std::cout << pid << "-" << i + 1 << std::endl;
		ReleaseMutex(mutex);
	}
	return NULL;
}