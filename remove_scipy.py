import subprocess

def uninstall_package(package_name):
    subprocess.check_call([f'pip uninstall -y {package_name}'], shell=True)

uninstall_package('scipy')
uninstall_package('sympy')
uninstall_package('symengine')
