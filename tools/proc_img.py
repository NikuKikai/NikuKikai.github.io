# import numpy as np
import cv2
from pathlib import Path
import math
import os


folder = 'D:/Pictures/Draw/Comics/O/OutputRawSplit'
save_folder = 'D:/temp'
target_height = 1200

sharpen_size = 3
sharpen_strength = 0.5

for file in Path(folder).glob('*.png'):
    src = cv2.imread(str(file.absolute()), cv2.IMREAD_UNCHANGED)

    # # blur
    # k = math.floor(src.shape[0] / target_height * 2)
    # blur = cv2.GaussianBlur(src, ksize=(k, k), sigmaX=0)

    # resize
    resized = cv2.resize(src, (round(target_height / src.shape[0] * src.shape[1]), target_height), interpolation=cv2.INTER_AREA)

    # # unsharp
    # sharp = cv2.addWeighted(
    #     resized, 1 + sharpen_strength,
    #     cv2.GaussianBlur(resized, (sharpen_size, sharpen_size), 0), -sharpen_strength,
    #     gamma=0
    # )

    # res = cv2.threshold(resized, 128, 255)

    cv2.imwrite(os.path.join(save_folder, file.name), resized)
